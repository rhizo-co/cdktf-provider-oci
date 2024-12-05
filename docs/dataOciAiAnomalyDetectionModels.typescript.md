# `dataOciAiAnomalyDetectionModels` Submodule <a name="`dataOciAiAnomalyDetectionModels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionModels <a name="DataOciAiAnomalyDetectionModels" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models oci_ai_anomaly_detection_models}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels(scope: Construct, id: string, config: DataOciAiAnomalyDetectionModelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig">DataOciAiAnomalyDetectionModelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig">DataOciAiAnomalyDetectionModelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciAiAnomalyDetectionModelsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionModels resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionModels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionModels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList">DataOciAiAnomalyDetectionModelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.modelCollection">modelCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList">DataOciAiAnomalyDetectionModelsModelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filter"></a>

```typescript
public readonly filter: DataOciAiAnomalyDetectionModelsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList">DataOciAiAnomalyDetectionModelsFilterList</a>

---

##### `modelCollection`<sup>Required</sup> <a name="modelCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.modelCollection"></a>

```typescript
public readonly modelCollection: DataOciAiAnomalyDetectionModelsModelCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList">DataOciAiAnomalyDetectionModelsModelCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciAiAnomalyDetectionModelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionModelsConfig <a name="DataOciAiAnomalyDetectionModelsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionModelsConfig: dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#compartment_id DataOciAiAnomalyDetectionModels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#display_name DataOciAiAnomalyDetectionModels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#id DataOciAiAnomalyDetectionModels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#project_id DataOciAiAnomalyDetectionModels#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#state DataOciAiAnomalyDetectionModels#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#compartment_id DataOciAiAnomalyDetectionModels#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#display_name DataOciAiAnomalyDetectionModels#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciAiAnomalyDetectionModelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#filter DataOciAiAnomalyDetectionModels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#id DataOciAiAnomalyDetectionModels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#project_id DataOciAiAnomalyDetectionModels#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#state DataOciAiAnomalyDetectionModels#state}.

---

### DataOciAiAnomalyDetectionModelsFilter <a name="DataOciAiAnomalyDetectionModelsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionModelsFilter: dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#name DataOciAiAnomalyDetectionModels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#values DataOciAiAnomalyDetectionModels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#regex DataOciAiAnomalyDetectionModels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#name DataOciAiAnomalyDetectionModels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#values DataOciAiAnomalyDetectionModels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_models#regex DataOciAiAnomalyDetectionModels#regex}.

---

### DataOciAiAnomalyDetectionModelsModelCollection <a name="DataOciAiAnomalyDetectionModelsModelCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionModelsModelCollection: dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection = { ... }
```


### DataOciAiAnomalyDetectionModelsModelCollectionItems <a name="DataOciAiAnomalyDetectionModelsModelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionModelsModelCollectionItems: dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems = { ... }
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails: dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails = { ... }
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults: dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults = { ... }
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails: dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails = { ... }
```


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails: dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionModelsFilterList <a name="DataOciAiAnomalyDetectionModelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionModelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAiAnomalyDetectionModelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>[]

---


### DataOciAiAnomalyDetectionModelsFilterOutputReference <a name="DataOciAiAnomalyDetectionModelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAiAnomalyDetectionModelsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsFilter">DataOciAiAnomalyDetectionModelsFilter</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.algorithmHint">algorithmHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.dataAssetIds">dataAssetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.targetFap">targetFap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.trainingFraction">trainingFraction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.windowSize">windowSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmHint`<sup>Required</sup> <a name="algorithmHint" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.algorithmHint"></a>

```typescript
public readonly algorithmHint: string;
```

- *Type:* string

---

##### `dataAssetIds`<sup>Required</sup> <a name="dataAssetIds" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.dataAssetIds"></a>

```typescript
public readonly dataAssetIds: string[];
```

- *Type:* string[]

---

##### `targetFap`<sup>Required</sup> <a name="targetFap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.targetFap"></a>

```typescript
public readonly targetFap: number;
```

- *Type:* number

---

##### `trainingFraction`<sup>Required</sup> <a name="trainingFraction" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.trainingFraction"></a>

```typescript
public readonly trainingFraction: number;
```

- *Type:* number

---

##### `windowSize`<sup>Required</sup> <a name="windowSize" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.windowSize"></a>

```typescript
public readonly windowSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fap">fap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.isTrainingGoalAchieved">isTrainingGoalAchieved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.mae">mae</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.maxInferenceSyncRows">maxInferenceSyncRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.multivariateFap">multivariateFap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rmse">rmse</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rowReductionDetails">rowReductionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.signalDetails">signalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.windowSize">windowSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fap`<sup>Required</sup> <a name="fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.fap"></a>

```typescript
public readonly fap: number;
```

- *Type:* number

---

##### `isTrainingGoalAchieved`<sup>Required</sup> <a name="isTrainingGoalAchieved" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.isTrainingGoalAchieved"></a>

```typescript
public readonly isTrainingGoalAchieved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mae`<sup>Required</sup> <a name="mae" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.mae"></a>

```typescript
public readonly mae: number;
```

- *Type:* number

---

##### `maxInferenceSyncRows`<sup>Required</sup> <a name="maxInferenceSyncRows" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.maxInferenceSyncRows"></a>

```typescript
public readonly maxInferenceSyncRows: number;
```

- *Type:* number

---

##### `multivariateFap`<sup>Required</sup> <a name="multivariateFap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.multivariateFap"></a>

```typescript
public readonly multivariateFap: number;
```

- *Type:* number

---

##### `rmse`<sup>Required</sup> <a name="rmse" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rmse"></a>

```typescript
public readonly rmse: number;
```

- *Type:* number

---

##### `rowReductionDetails`<sup>Required</sup> <a name="rowReductionDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.rowReductionDetails"></a>

```typescript
public readonly rowReductionDetails: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList</a>

---

##### `signalDetails`<sup>Required</sup> <a name="signalDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.signalDetails"></a>

```typescript
public readonly signalDetails: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList</a>

---

##### `warning`<sup>Required</sup> <a name="warning" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `windowSize`<sup>Required</sup> <a name="windowSize" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.windowSize"></a>

```typescript
public readonly windowSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResults</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled">isReductionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod">reductionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage">reductionPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isReductionEnabled`<sup>Required</sup> <a name="isReductionEnabled" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled"></a>

```typescript
public readonly isReductionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `reductionMethod`<sup>Required</sup> <a name="reductionMethod" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod"></a>

```typescript
public readonly reductionMethod: string;
```

- *Type:* string

---

##### `reductionPercentage`<sup>Required</sup> <a name="reductionPercentage" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage"></a>

```typescript
public readonly reductionPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsRowReductionDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fap">fap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.isQuantized">isQuantized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.mviRatio">mviRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.signalName">signalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.std">std</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `fap`<sup>Required</sup> <a name="fap" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.fap"></a>

```typescript
public readonly fap: number;
```

- *Type:* number

---

##### `isQuantized`<sup>Required</sup> <a name="isQuantized" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.isQuantized"></a>

```typescript
public readonly isQuantized: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `mviRatio`<sup>Required</sup> <a name="mviRatio" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.mviRatio"></a>

```typescript
public readonly mviRatio: number;
```

- *Type:* number

---

##### `signalName`<sup>Required</sup> <a name="signalName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.signalName"></a>

```typescript
public readonly signalName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `std`<sup>Required</sup> <a name="std" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.std"></a>

```typescript
public readonly std: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsSignalDetails</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingDetails">modelTrainingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingResults">modelTrainingResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems">DataOciAiAnomalyDetectionModelsModelCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `modelTrainingDetails`<sup>Required</sup> <a name="modelTrainingDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingDetails"></a>

```typescript
public readonly modelTrainingDetails: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingDetailsList</a>

---

##### `modelTrainingResults`<sup>Required</sup> <a name="modelTrainingResults" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.modelTrainingResults"></a>

```typescript
public readonly modelTrainingResults: DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsModelTrainingResultsList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionModelsModelCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItems">DataOciAiAnomalyDetectionModelsModelCollectionItems</a>

---


### DataOciAiAnomalyDetectionModelsModelCollectionList <a name="DataOciAiAnomalyDetectionModelsModelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionModelsModelCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionModelsModelCollectionOutputReference <a name="DataOciAiAnomalyDetectionModelsModelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionModels } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection">DataOciAiAnomalyDetectionModelsModelCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciAiAnomalyDetectionModelsModelCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionItemsList">DataOciAiAnomalyDetectionModelsModelCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionModelsModelCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionModels.DataOciAiAnomalyDetectionModelsModelCollection">DataOciAiAnomalyDetectionModelsModelCollection</a>

---



