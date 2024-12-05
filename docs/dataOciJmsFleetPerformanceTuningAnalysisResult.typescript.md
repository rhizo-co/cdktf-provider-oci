# `dataOciJmsFleetPerformanceTuningAnalysisResult` Submodule <a name="`dataOciJmsFleetPerformanceTuningAnalysisResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResult <a name="DataOciJmsFleetPerformanceTuningAnalysisResult" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result oci_jms_fleet_performance_tuning_analysis_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResult } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult(scope: Construct, id: string, config: DataOciJmsFleetPerformanceTuningAnalysisResultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig">DataOciJmsFleetPerformanceTuningAnalysisResultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig">DataOciJmsFleetPerformanceTuningAnalysisResultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResult resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResult } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResult } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResult } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResult } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsFleetPerformanceTuningAnalysisResult to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsFleetPerformanceTuningAnalysisResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetPerformanceTuningAnalysisResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationId">applicationInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationPath">applicationInstallationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.warningCount">warningCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultIdInput">performanceTuningAnalysisResultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultId">performanceTuningAnalysisResultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationInstallationId`<sup>Required</sup> <a name="applicationInstallationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationId"></a>

```typescript
public readonly applicationInstallationId: string;
```

- *Type:* string

---

##### `applicationInstallationPath`<sup>Required</sup> <a name="applicationInstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationInstallationPath"></a>

```typescript
public readonly applicationInstallationPath: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `warningCount`<sup>Required</sup> <a name="warningCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.warningCount"></a>

```typescript
public readonly warningCount: number;
```

- *Type:* number

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `performanceTuningAnalysisResultIdInput`<sup>Optional</sup> <a name="performanceTuningAnalysisResultIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultIdInput"></a>

```typescript
public readonly performanceTuningAnalysisResultIdInput: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `performanceTuningAnalysisResultId`<sup>Required</sup> <a name="performanceTuningAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.performanceTuningAnalysisResultId"></a>

```typescript
public readonly performanceTuningAnalysisResultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResult.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResultConfig <a name="DataOciJmsFleetPerformanceTuningAnalysisResultConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResult } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetPerformanceTuningAnalysisResultConfig: dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.performanceTuningAnalysisResultId">performanceTuningAnalysisResultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResult#fleet_id}.

---

##### `performanceTuningAnalysisResultId`<sup>Required</sup> <a name="performanceTuningAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.performanceTuningAnalysisResultId"></a>

```typescript
public readonly performanceTuningAnalysisResultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#performance_tuning_analysis_result_id DataOciJmsFleetPerformanceTuningAnalysisResult#performance_tuning_analysis_result_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResult.DataOciJmsFleetPerformanceTuningAnalysisResultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_result#id DataOciJmsFleetPerformanceTuningAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



