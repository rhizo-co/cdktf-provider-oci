# `dataOciLogAnalyticsLogAnalyticsCategoriesList` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsCategoriesList` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsCategoriesList <a name="DataOciLogAnalyticsLogAnalyticsCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list oci_log_analytics_log_analytics_categories_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsCategoriesListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig">DataOciLogAnalyticsLogAnalyticsCategoriesListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig">DataOciLogAnalyticsLogAnalyticsCategoriesListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetCategoryDisplayText">resetCategoryDisplayText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetCategoryType">resetCategoryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCategoryDisplayText` <a name="resetCategoryDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetCategoryDisplayText"></a>

```typescript
public resetCategoryDisplayText(): void
```

##### `resetCategoryType` <a name="resetCategoryType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetCategoryType"></a>

```typescript
public resetCategoryType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsCategoriesList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsCategoriesList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsCategoriesList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsCategoriesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsCategoriesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryDisplayTextInput">categoryDisplayTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryTypeInput">categoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryDisplayText">categoryDisplayText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryType">categoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList</a>

---

##### `categoryDisplayTextInput`<sup>Optional</sup> <a name="categoryDisplayTextInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryDisplayTextInput"></a>

```typescript
public readonly categoryDisplayTextInput: string;
```

- *Type:* string

---

##### `categoryTypeInput`<sup>Optional</sup> <a name="categoryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryTypeInput"></a>

```typescript
public readonly categoryTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `categoryDisplayText`<sup>Required</sup> <a name="categoryDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryDisplayText"></a>

```typescript
public readonly categoryDisplayText: string;
```

- *Type:* string

---

##### `categoryType`<sup>Required</sup> <a name="categoryType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.categoryType"></a>

```typescript
public readonly categoryType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsCategoriesListConfig <a name="DataOciLogAnalyticsLogAnalyticsCategoriesListConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsCategoriesListConfig: dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#namespace DataOciLogAnalyticsLogAnalyticsCategoriesList#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.categoryDisplayText">categoryDisplayText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_display_text DataOciLogAnalyticsLogAnalyticsCategoriesList#category_display_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.categoryType">categoryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_type DataOciLogAnalyticsLogAnalyticsCategoriesList#category_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#id DataOciLogAnalyticsLogAnalyticsCategoriesList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#name DataOciLogAnalyticsLogAnalyticsCategoriesList#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#namespace DataOciLogAnalyticsLogAnalyticsCategoriesList#namespace}.

---

##### `categoryDisplayText`<sup>Optional</sup> <a name="categoryDisplayText" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.categoryDisplayText"></a>

```typescript
public readonly categoryDisplayText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_display_text DataOciLogAnalyticsLogAnalyticsCategoriesList#category_display_text}.

---

##### `categoryType`<sup>Optional</sup> <a name="categoryType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.categoryType"></a>

```typescript
public readonly categoryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#category_type DataOciLogAnalyticsLogAnalyticsCategoriesList#category_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#id DataOciLogAnalyticsLogAnalyticsCategoriesList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_categories_list#name DataOciLogAnalyticsLogAnalyticsCategoriesList#name}.

---

### DataOciLogAnalyticsLogAnalyticsCategoriesListItems <a name="DataOciLogAnalyticsLogAnalyticsCategoriesListItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsCategoriesListItems: dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList <a name="DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsCategoriesList } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.isSystem">isSystem</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems">DataOciLogAnalyticsLogAnalyticsCategoriesListItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isSystem`<sup>Required</sup> <a name="isSystem" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.isSystem"></a>

```typescript
public readonly isSystem: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsCategoriesListItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsCategoriesList.DataOciLogAnalyticsLogAnalyticsCategoriesListItems">DataOciLogAnalyticsLogAnalyticsCategoriesListItems</a>

---



