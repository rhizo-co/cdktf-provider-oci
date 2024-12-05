# `dataOciOptimizerRecommendations` Submodule <a name="`dataOciOptimizerRecommendations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerRecommendations <a name="DataOciOptimizerRecommendations" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations oci_optimizer_recommendations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendations(scope: Construct, id: string, config: DataOciOptimizerRecommendationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig">DataOciOptimizerRecommendationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig">DataOciOptimizerRecommendationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetCategoryId">resetCategoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetCategoryName">resetCategoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetChildTenancyIds">resetChildTenancyIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetIncludeOrganization">resetIncludeOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOptimizerRecommendationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a>[]

---

##### `resetCategoryId` <a name="resetCategoryId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetCategoryId"></a>

```typescript
public resetCategoryId(): void
```

##### `resetCategoryName` <a name="resetCategoryName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetCategoryName"></a>

```typescript
public resetCategoryName(): void
```

##### `resetChildTenancyIds` <a name="resetChildTenancyIds" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetChildTenancyIds"></a>

```typescript
public resetChildTenancyIds(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeOrganization` <a name="resetIncludeOrganization" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetIncludeOrganization"></a>

```typescript
public resetIncludeOrganization(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerRecommendations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isConstruct"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isTerraformElement"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isTerraformDataSource"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.generateConfigForImport"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOptimizerRecommendations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOptimizerRecommendations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOptimizerRecommendations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerRecommendations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList">DataOciOptimizerRecommendationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.recommendationCollection">recommendationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList">DataOciOptimizerRecommendationsRecommendationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.categoryIdInput">categoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.categoryNameInput">categoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.childTenancyIdsInput">childTenancyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.includeOrganizationInput">includeOrganizationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.categoryId">categoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.categoryName">categoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.childTenancyIds">childTenancyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.includeOrganization">includeOrganization</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.filter"></a>

```typescript
public readonly filter: DataOciOptimizerRecommendationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList">DataOciOptimizerRecommendationsFilterList</a>

---

##### `recommendationCollection`<sup>Required</sup> <a name="recommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.recommendationCollection"></a>

```typescript
public readonly recommendationCollection: DataOciOptimizerRecommendationsRecommendationCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList">DataOciOptimizerRecommendationsRecommendationCollectionList</a>

---

##### `categoryIdInput`<sup>Optional</sup> <a name="categoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.categoryIdInput"></a>

```typescript
public readonly categoryIdInput: string;
```

- *Type:* string

---

##### `categoryNameInput`<sup>Optional</sup> <a name="categoryNameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.categoryNameInput"></a>

```typescript
public readonly categoryNameInput: string;
```

- *Type:* string

---

##### `childTenancyIdsInput`<sup>Optional</sup> <a name="childTenancyIdsInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.childTenancyIdsInput"></a>

```typescript
public readonly childTenancyIdsInput: string[];
```

- *Type:* string[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOptimizerRecommendationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeOrganizationInput`<sup>Optional</sup> <a name="includeOrganizationInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.includeOrganizationInput"></a>

```typescript
public readonly includeOrganizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.categoryId"></a>

```typescript
public readonly categoryId: string;
```

- *Type:* string

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

---

##### `childTenancyIds`<sup>Required</sup> <a name="childTenancyIds" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.childTenancyIds"></a>

```typescript
public readonly childTenancyIds: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeOrganization`<sup>Required</sup> <a name="includeOrganization" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.includeOrganization"></a>

```typescript
public readonly includeOrganization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerRecommendationsConfig <a name="DataOciOptimizerRecommendationsConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationsConfig: dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#compartment_id DataOciOptimizerRecommendations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#compartment_id_in_subtree DataOciOptimizerRecommendations#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.categoryId">categoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#category_id DataOciOptimizerRecommendations#category_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.categoryName">categoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#category_name DataOciOptimizerRecommendations#category_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.childTenancyIds">childTenancyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#child_tenancy_ids DataOciOptimizerRecommendations#child_tenancy_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#id DataOciOptimizerRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.includeOrganization">includeOrganization</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#include_organization DataOciOptimizerRecommendations#include_organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#name DataOciOptimizerRecommendations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#state DataOciOptimizerRecommendations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#status DataOciOptimizerRecommendations#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#compartment_id DataOciOptimizerRecommendations#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#compartment_id_in_subtree DataOciOptimizerRecommendations#compartment_id_in_subtree}.

---

##### `categoryId`<sup>Optional</sup> <a name="categoryId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.categoryId"></a>

```typescript
public readonly categoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#category_id DataOciOptimizerRecommendations#category_id}.

---

##### `categoryName`<sup>Optional</sup> <a name="categoryName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#category_name DataOciOptimizerRecommendations#category_name}.

---

##### `childTenancyIds`<sup>Optional</sup> <a name="childTenancyIds" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.childTenancyIds"></a>

```typescript
public readonly childTenancyIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#child_tenancy_ids DataOciOptimizerRecommendations#child_tenancy_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOptimizerRecommendationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#filter DataOciOptimizerRecommendations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#id DataOciOptimizerRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeOrganization`<sup>Optional</sup> <a name="includeOrganization" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.includeOrganization"></a>

```typescript
public readonly includeOrganization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#include_organization DataOciOptimizerRecommendations#include_organization}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#name DataOciOptimizerRecommendations#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#state DataOciOptimizerRecommendations#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#status DataOciOptimizerRecommendations#status}.

---

### DataOciOptimizerRecommendationsFilter <a name="DataOciOptimizerRecommendationsFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationsFilter: dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#name DataOciOptimizerRecommendations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#values DataOciOptimizerRecommendations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#regex DataOciOptimizerRecommendations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#name DataOciOptimizerRecommendations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#values DataOciOptimizerRecommendations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendations#regex DataOciOptimizerRecommendations#regex}.

---

### DataOciOptimizerRecommendationsRecommendationCollection <a name="DataOciOptimizerRecommendationsRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollection.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationsRecommendationCollection: dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollection = { ... }
```


### DataOciOptimizerRecommendationsRecommendationCollectionItems <a name="DataOciOptimizerRecommendationsRecommendationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItems.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationsRecommendationCollectionItems: dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItems = { ... }
```


### DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts: dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts = { ... }
```


### DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels: dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels = { ... }
```


### DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

const dataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems: dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerRecommendationsFilterList <a name="DataOciOptimizerRecommendationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOptimizerRecommendationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a>[]

---


### DataOciOptimizerRecommendationsFilterOutputReference <a name="DataOciOptimizerRecommendationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOptimizerRecommendationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsFilter">DataOciOptimizerRecommendationsFilter</a>

---


### DataOciOptimizerRecommendationsRecommendationCollectionItemsList <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.categoryId">categoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.estimatedCostSaving">estimatedCostSaving</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.extendedMetadata">extendedMetadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.importance">importance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.recommendationId">recommendationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.resourceCounts">resourceCounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList">DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.supportedLevels">supportedLevels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList">DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.timeStatusBegin">timeStatusBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.timeStatusEnd">timeStatusEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItems">DataOciOptimizerRecommendationsRecommendationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.categoryId"></a>

```typescript
public readonly categoryId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `estimatedCostSaving`<sup>Required</sup> <a name="estimatedCostSaving" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.estimatedCostSaving"></a>

```typescript
public readonly estimatedCostSaving: number;
```

- *Type:* number

---

##### `extendedMetadata`<sup>Required</sup> <a name="extendedMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.extendedMetadata"></a>

```typescript
public readonly extendedMetadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importance`<sup>Required</sup> <a name="importance" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.importance"></a>

```typescript
public readonly importance: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recommendationId`<sup>Required</sup> <a name="recommendationId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.recommendationId"></a>

```typescript
public readonly recommendationId: string;
```

- *Type:* string

---

##### `resourceCounts`<sup>Required</sup> <a name="resourceCounts" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.resourceCounts"></a>

```typescript
public readonly resourceCounts: DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList">DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportedLevels`<sup>Required</sup> <a name="supportedLevels" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.supportedLevels"></a>

```typescript
public readonly supportedLevels: DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList">DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeStatusBegin`<sup>Required</sup> <a name="timeStatusBegin" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.timeStatusBegin"></a>

```typescript
public readonly timeStatusBegin: string;
```

- *Type:* string

---

##### `timeStatusEnd`<sup>Required</sup> <a name="timeStatusEnd" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.timeStatusEnd"></a>

```typescript
public readonly timeStatusEnd: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationsRecommendationCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItems">DataOciOptimizerRecommendationsRecommendationCollectionItems</a>

---


### DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts">DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts">DataOciOptimizerRecommendationsRecommendationCollectionItemsResourceCounts</a>

---


### DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems">DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems">DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItems</a>

---


### DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference <a name="DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList">DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels">DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList">DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels">DataOciOptimizerRecommendationsRecommendationCollectionItemsSupportedLevels</a>

---


### DataOciOptimizerRecommendationsRecommendationCollectionList <a name="DataOciOptimizerRecommendationsRecommendationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.get"></a>

```typescript
public get(index: number): DataOciOptimizerRecommendationsRecommendationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOptimizerRecommendationsRecommendationCollectionOutputReference <a name="DataOciOptimizerRecommendationsRecommendationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOptimizerRecommendations } from 'rhizo-co-terraform-provider-oci'

new dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList">DataOciOptimizerRecommendationsRecommendationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollection">DataOciOptimizerRecommendationsRecommendationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOptimizerRecommendationsRecommendationCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionItemsList">DataOciOptimizerRecommendationsRecommendationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOptimizerRecommendationsRecommendationCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendations.DataOciOptimizerRecommendationsRecommendationCollection">DataOciOptimizerRecommendationsRecommendationCollection</a>

---



