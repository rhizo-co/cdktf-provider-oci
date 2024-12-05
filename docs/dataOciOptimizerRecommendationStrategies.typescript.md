# `dataOciOptimizerRecommendationStrategies` Submodule <a name="`dataOciOptimizerRecommendationStrategies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerRecommendationStrategies <a name="DataOciOptimizerRecommendationStrategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies oci_optimizer_recommendation_strategies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies(scope: Construct, id: string, config: DataOciOptimizerRecommendationStrategiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig">DataOciOptimizerRecommendationStrategiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig">DataOciOptimizerRecommendationStrategiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetRecommendationName">resetRecommendationName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOptimizerRecommendationStrategiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRecommendationName` <a name="resetRecommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetRecommendationName"></a>

```typescript
public resetRecommendationName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isConstruct"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformElement"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformDataSource"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOptimizerRecommendationStrategies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOptimizerRecommendationStrategies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerRecommendationStrategies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList">DataOciOptimizerRecommendationStrategiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationStrategyCollection">recommendationStrategyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationNameInput">recommendationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationName">recommendationName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.filter"></a>

```typescript
public readonly filter: DataOciOptimizerRecommendationStrategiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList">DataOciOptimizerRecommendationStrategiesFilterList</a>

---

##### `recommendationStrategyCollection`<sup>Required</sup> <a name="recommendationStrategyCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationStrategyCollection"></a>

```typescript
public readonly recommendationStrategyCollection: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOptimizerRecommendationStrategiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recommendationNameInput`<sup>Optional</sup> <a name="recommendationNameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationNameInput"></a>

```typescript
public readonly recommendationNameInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recommendationName`<sup>Required</sup> <a name="recommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationName"></a>

```typescript
public readonly recommendationName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerRecommendationStrategiesConfig <a name="DataOciOptimizerRecommendationStrategiesConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationStrategiesConfig: dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id DataOciOptimizerRecommendationStrategies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id_in_subtree DataOciOptimizerRecommendationStrategies#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#id DataOciOptimizerRecommendationStrategies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.recommendationName">recommendationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#recommendation_name DataOciOptimizerRecommendationStrategies#recommendation_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id DataOciOptimizerRecommendationStrategies#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id_in_subtree DataOciOptimizerRecommendationStrategies#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOptimizerRecommendationStrategiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#filter DataOciOptimizerRecommendationStrategies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#id DataOciOptimizerRecommendationStrategies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}.

---

##### `recommendationName`<sup>Optional</sup> <a name="recommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.recommendationName"></a>

```typescript
public readonly recommendationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#recommendation_name DataOciOptimizerRecommendationStrategies#recommendation_name}.

---

### DataOciOptimizerRecommendationStrategiesFilter <a name="DataOciOptimizerRecommendationStrategiesFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationStrategiesFilter: dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#values DataOciOptimizerRecommendationStrategies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#regex DataOciOptimizerRecommendationStrategies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#values DataOciOptimizerRecommendationStrategies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#regex DataOciOptimizerRecommendationStrategies#regex}.

---

### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection: dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection = { ... }
```


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems: dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems = { ... }
```


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies: dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies = { ... }
```


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition: dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerRecommendationStrategiesFilterList <a name="DataOciOptimizerRecommendationStrategiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationStrategiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOptimizerRecommendationStrategiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>[]

---


### DataOciOptimizerRecommendationStrategiesFilterOutputReference <a name="DataOciOptimizerRecommendationStrategiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOptimizerRecommendationStrategiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.strategies"></a>

```typescript
public readonly strategies: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems</a>

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.parametersDefinition">parametersDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.strategyName">strategyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `parametersDefinition`<sup>Required</sup> <a name="parametersDefinition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.parametersDefinition"></a>

```typescript
public readonly parametersDefinition: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList</a>

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.strategyName"></a>

```typescript
public readonly strategyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies</a>

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.defaultValue">defaultValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.isRequired">isRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.possibleValues">possibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.possibleValues"></a>

```typescript
public readonly possibleValues: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition</a>

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendationStrategies } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection</a>

---



