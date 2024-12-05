# `dataOciAiLanguageModelEvaluationResults` Submodule <a name="`dataOciAiLanguageModelEvaluationResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiLanguageModelEvaluationResultsA <a name="DataOciAiLanguageModelEvaluationResultsA" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results oci_ai_language_model_evaluation_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA(scope: Construct, id: string, config: DataOciAiLanguageModelEvaluationResultsAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig">DataOciAiLanguageModelEvaluationResultsAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig">DataOciAiLanguageModelEvaluationResultsAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciAiLanguageModelEvaluationResultsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiLanguageModelEvaluationResultsA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isConstruct"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformElement"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformDataSource"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAiLanguageModelEvaluationResultsA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiLanguageModelEvaluationResultsA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiLanguageModelEvaluationResultsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiLanguageModelEvaluationResultsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.evaluationResultCollection">evaluationResultCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList">DataOciAiLanguageModelEvaluationResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `evaluationResultCollection`<sup>Required</sup> <a name="evaluationResultCollection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.evaluationResultCollection"></a>

```typescript
public readonly evaluationResultCollection: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.filter"></a>

```typescript
public readonly filter: DataOciAiLanguageModelEvaluationResultsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList">DataOciAiLanguageModelEvaluationResultsFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciAiLanguageModelEvaluationResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiLanguageModelEvaluationResultsAConfig <a name="DataOciAiLanguageModelEvaluationResultsAConfig" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

const dataOciAiLanguageModelEvaluationResultsAConfig: dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#model_id DataOciAiLanguageModelEvaluationResultsA#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#id DataOciAiLanguageModelEvaluationResultsA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#model_id DataOciAiLanguageModelEvaluationResultsA#model_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciAiLanguageModelEvaluationResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#filter DataOciAiLanguageModelEvaluationResultsA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#id DataOciAiLanguageModelEvaluationResultsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

const dataOciAiLanguageModelEvaluationResultsEvaluationResultCollection: dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection = { ... }
```


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

const dataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems: dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems = { ... }
```


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

const dataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities: dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities = { ... }
```


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

const dataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities: dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities = { ... }
```


### DataOciAiLanguageModelEvaluationResultsFilter <a name="DataOciAiLanguageModelEvaluationResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

const dataOciAiLanguageModelEvaluationResultsFilter: dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#name DataOciAiLanguageModelEvaluationResultsA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#values DataOciAiLanguageModelEvaluationResultsA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#regex DataOciAiLanguageModelEvaluationResultsA#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#name DataOciAiLanguageModelEvaluationResultsA#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#values DataOciAiLanguageModelEvaluationResultsA#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_language_model_evaluation_results#regex DataOciAiLanguageModelEvaluationResultsA#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.predictedEntities">predictedEntities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.predictedLabels">predictedLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.record">record</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.trueEntities">trueEntities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.trueLabels">trueLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `predictedEntities`<sup>Required</sup> <a name="predictedEntities" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.predictedEntities"></a>

```typescript
public readonly predictedEntities: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList</a>

---

##### `predictedLabels`<sup>Required</sup> <a name="predictedLabels" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.predictedLabels"></a>

```typescript
public readonly predictedLabels: string[];
```

- *Type:* string[]

---

##### `record`<sup>Required</sup> <a name="record" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.record"></a>

```typescript
public readonly record: string;
```

- *Type:* string

---

##### `trueEntities`<sup>Required</sup> <a name="trueEntities" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.trueEntities"></a>

```typescript
public readonly trueEntities: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList</a>

---

##### `trueLabels`<sup>Required</sup> <a name="trueLabels" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.trueLabels"></a>

```typescript
public readonly trueLabels: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItems</a>

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.get"></a>

```typescript
public get(index: number): DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsPredictedEntities</a>

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.get"></a>

```typescript
public get(index: number): DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsTrueEntities</a>

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.get"></a>

```typescript
public get(index: number): DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference <a name="DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection">DataOciAiLanguageModelEvaluationResultsEvaluationResultCollection</a>

---


### DataOciAiLanguageModelEvaluationResultsFilterList <a name="DataOciAiLanguageModelEvaluationResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.get"></a>

```typescript
public get(index: number): DataOciAiLanguageModelEvaluationResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAiLanguageModelEvaluationResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>[]

---


### DataOciAiLanguageModelEvaluationResultsFilterOutputReference <a name="DataOciAiLanguageModelEvaluationResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciAiLanguageModelEvaluationResults } from 'rhizo-co-terraform-provider-oci'

new dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAiLanguageModelEvaluationResultsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiLanguageModelEvaluationResults.DataOciAiLanguageModelEvaluationResultsFilter">DataOciAiLanguageModelEvaluationResultsFilter</a>

---



